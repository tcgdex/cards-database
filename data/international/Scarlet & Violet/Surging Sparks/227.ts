import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [289],
	set: Set,

	name: {
		'en-us': "Slaking ex",
		'fr-fr': "Monaflèmit-ex",
		'es-es': "Slaking ex",
		'it-it': "Slaking-ex",
		'pt-br': "Slaking ex",
		'de-de': "Letarking-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 340,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth",
		'es-es': "Vigoroth",
		'it-it': "Vigoroth",
		'pt-br': "Vigoroth",
		'de-de': "Muntier"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Born to Slack",
			'fr-fr': "Procrastinateur-Né",
			'es-es': "Holgazán Nato",
			'it-it': "Pigrizia Innata",
			'pt-br': "Preguiça de Nascença",
			'de-de': "Meister der Lethargie"
		},

		effect: {
			'en-us': "If your opponent has no Pokémon ex or Pokémon V in play, this Pokémon can't attack.",
			'fr-fr': "Si votre adversaire n'a aucun Pokémon-ex ni Pokémon-V en jeu, ce Pokémon ne peut pas attaquer.",
			'es-es': "Si tu rival no tiene ningún Pokémon ex o Pokémon V en juego, este Pokémon no puede atacar.",
			'it-it': "Se il tuo avversario non ha Pokémon-ex o Pokémon-V in gioco, questo Pokémon non può attaccare.",
			'pt-br': "Se o seu oponente não tiver Pokémon ex ou Pokémon V em jogo, este Pokémon não poderá atacar.",
			'de-de': "Wenn dein Gegner kein Pokémon-ex oder Pokémon-V im Spiel hat, kann dieses Pokémon nicht angreifen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Great Swing",
			'fr-fr': "Grande Frappe",
			'es-es': "Golpe Excelente",
			'it-it': "Colpo Immane",
			'pt-br': "Murrão",
			'de-de': "Riesiger Rundschlag"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 280
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794600,
				tcgplayer: 590055
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Igarashi",

}

export default card
