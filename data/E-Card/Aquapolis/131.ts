import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Pokémon Park",
		fr: "Parc Pokémon",
		de: "Pokémon Park*"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Stadium",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each of his or her turns, whenever a player attaches an Energy card from his or her hand to 1 of his or her Benched Pokémon, he or she removes 1 damage counter, if any, from that Pokémon.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -vous de cette carte si une autre carte Stade arrive en jeu.",
		de: "Einmal während jedes seiner Züge entfernt ein Spieler, wenn er eine Energiekarte aus seiner Hand an 1 der Pokémon auf seiner Bank anlegt, 1 Schadensmarke von diesem Pokémon, falls vorhanden. Diese Karte bleibt im Spiel, wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadion-Karte ins Spiel kommt."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 275207,
				tcgplayer: 88230
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 275207,
				tcgplayer: 88230
			}
		},
	]
}

export default card
