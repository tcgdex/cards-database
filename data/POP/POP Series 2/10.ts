import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Pokémon Park",
		fr: "Parc Pokémon",
		de: "Pokémon Park*"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Once during each player's turn, when that player attaches an Energy card from his or her hand to 1 of his or her Benched Pokémon, he or she removes 1 damage counter from that Pokémon.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu.\n\nUne seule fois lors du tour de chaque joueur, lorsqu'un joueur attache une carte Énergie de sa main à 1 des Pokémon de son Banc, il retire à ce Pokémon 1 marqueur de dégât.",
		de: "Diese Karte bleibt im Spiel, wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadion-Karte ins Spiel kommt. Ein Mal während jedes seiner Züge entfernt ein Spieler, wenn er eine Energiekarte aus seiner Hand an 1 der Pokémon auf seiner Bank anlegt, 1 Schadensmarke von diesem Pokémon, falls vorhanden."
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88231,
				cardmarket: 277441
			},
		},
	],

}

export default card
