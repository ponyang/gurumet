<script>
    import Dialog, {Title, Content, Actions, InitialFocus} from '@smui/dialog';
    import Button, {Label} from '@smui/button';
    import List, {Item, Graphic, Text} from '@smui/list';
    import Radio from '@smui/radio';
    import Slider from '@smui/slider';
    import FormField from '@smui/form-field';

    let simpleDialog;
    let clicked = 'Nothing yet.';
</script>
About1
<Button on:click={()=>alert('about')}>클릭해주세요</Button>

<Dialog bind:this={simpleDialog} aria-labelledby="simple-title" aria-describedby="simple-content">
    <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
    <Title id="simple-title">Dialog Title</Title>
    <Content id="simple-content">
      Super awesome dialog body text?
    </Content>
    <Actions>
      <Button on:click={() => clicked = 'No'}>
        <Label>No</Label>
      </Button>
      <Button on:click={() => clicked = 'Yes'}>
        <Label>Yes</Label>
      </Button>
    </Actions>
</Dialog>
<Button on:click={() => simpleDialog.open()}><Label>Open Dialog</Label></Button>
