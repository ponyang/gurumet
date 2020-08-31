import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser'; //생성된 ES 번들을 최소화
import postcss from 'rollup-plugin-postcss';


const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js'
	},
	plugins: [
		svelte({
			dev: !production,
			css: css => {
				css.write('public/bundle.css');
			}
		}),
		resolve({
			//browser default false; 
			//true일 경우 "package.json" 파일의 "browser" 속성을 사용하여 번들을 위해 로드할 대체 파일을 지정
			//브라우저 환경에서 번들링 할 때 유용
			browser: true,
			//dedupe default []
			//의존성에 의해 패키지 import할 때 같은 패키지가 중복으로 들어가는 것을 방지
			dedupe: ['svelte']
		}),
		commonjs(),
		// Then paste the following after it.
		// Once in the "client:" section, and again in the "server:" section.
		postcss({
			extract: true,
			minimize: true,
			use: [
	  			['sass', {
					includePaths: [
		  				'./src/theme',
		  				'./node_modules'
					]
	  			}]
			]
  		}),

		!production && livereload('public'),

		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
