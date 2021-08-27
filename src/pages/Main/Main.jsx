import React from 'react';
import { Grid, Header, Button, Container } from 'semantic-ui-react';

export default function Main() {

    return (

        <Grid padded textAlign="center" verticalAlign="middle">

            <Grid.Column width={16} className="" textAlign="center">

                <Header>Welcome</Header>

                <Container className="flex flex-auto items-center w-52 gap-2">
                    <Button fluid size="tiny" content="Button 1" />
                    <Button fluid size="tiny" content="Button 2" />
                </Container>

            </Grid.Column>


        </Grid>

    )

}