import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [534],
	set: Set,

	name: {
		'en-us': "Conkeldurr",
		'fr-fr': "Bétochef",
		'es-es': "Conkeldurr",
		'it-it': "Conkeldurr",
		'pt-br': "Conkeldurr",
		'de-de': "Meistagrif"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Gurdurr",
		'fr-fr': "Ouvrifier",
		'es-es': "Gurdurr",
		'it-it': "Gurdurr",
		'pt-br': "Gurdurr",
		'de-de': "Strepoli"
	},

	attacks: [{
		name: {
			'en-us': "Hammer Pressure",
			'fr-fr': "Pression Martelante",
			'es-es': "Presión Martillo",
			'it-it': "Pressione Martellante",
			'pt-br': "Pressão Marteladora",
			'de-de': "Hammerdruck"
		},

		effect: {
			'en-us': "If the Defending Pokémon is an Evolution Pokémon, it can't attack during your opponent's next turn.",
			'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolutif, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			'es-es': "Si el Pokémon Defensor es un Pokémon Evolución, no puede atacar durante el próximo turno de tu rival.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Evoluzione.",
			'pt-br': "Se o Pokémon Defensor for um Pokémon de Evolução, ele não poderá atacar durante o próximo turno do seu oponente.",
			'de-de': "Wenn das Verteidigende Pokémon ein Entwicklungs-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Mega Punch",
			'fr-fr': "Ultimapoing",
			'es-es': "Megapuño",
			'it-it': "Megapugno",
			'pt-br': "Megassoco",
			'de-de': "Megahieb"
		},

		damage: 150,
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "When going all out, this Pokémon throws aside its concrete pillars and leaps at opponents to pummel them with its fists."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545491,
				tcgplayer: 234251
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545491,
				tcgplayer: 234251
			}
		},
	],
}

export default card
