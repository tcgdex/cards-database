import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [262],
	set: Set,

	name: {
		'en-us': "Mightyena",
		'fr-fr': "Grahyèna",
		'es-es': "Mightyena",
		'it-it': "Mightyena",
		'pt-br': "Mightyena",
		'de-de': "Magnayen"
	},

	illustrator: "otumami",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna",
		'es-es': "Poochyena",
		'it-it': "Poochyena",
		'pt-br': "Poochyena",
		'de-de': "Fiffyen"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Hustle Bark",
			'fr-fr': "Aboiement Acharné",
			'es-es': "Ladrido Apremiante",
			'it-it': "Abbaiare Frenetico",
			'pt-br': "Latido Alvoroçado",
			'de-de': "Ehrgeiziges Bellen"
		},

		effect: {
			'en-us': "If your opponent has any Pokémon VMAX in play, this Pokémon's attacks cost ColorlessColorlessColorless less.",
			'fr-fr': "Si votre adversaire a au moins un Pokémon-VMAX en jeu, les attaques de ce Pokémon coûtent ColorlessColorlessColorless de moins.",
			'es-es': "Si tu rival tiene algún Pokémon VMAX en juego, los ataques de este Pokémon cuestan ColorlessColorlessColorless menos.",
			'it-it': "Se il tuo avversario ha dei Pokémon-VMAX in gioco, il costo degli attacchi di questo Pokémon è ridotto di ColorlessColorlessColorless.",
			'pt-br': "Se o seu oponente tiver algum Pokémon VMAX em jogo, os ataques deste Pokémon custarão ColorlessColorlessColorless a menos.",
			'de-de': "Wenn dein Gegner mindestens 1 Pokémon-VMAX im Spiel hat, verringern sich die Kosten der Attacken dieses Pokémon um ColorlessColorlessColorless."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Wild Tackle",
			'fr-fr': "Tacle Brutal",
			'es-es': "Placaje Salvaje",
			'it-it': "Azionferoce",
			'pt-br': "Investida Feroz",
			'de-de': "Wilder Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It chases down prey in a pack of around ten. They defeat foes with perfectly coordinated teamwork.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658740,
				tcgplayer: 272297
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658740,
				tcgplayer: 272297
			}
		},
	],
}

export default card
