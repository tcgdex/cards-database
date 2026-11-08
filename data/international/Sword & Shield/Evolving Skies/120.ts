import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Flapple",
		'fr-fr': "Pomdrapi",
		'es-es': "Flapple",
		'it-it': "Flapple",
		'pt-br': "Flapple",
		'de-de': "Drapfel"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],
	stage: "Stage1",
	illustrator: "Anesaki Dynamic",

	attacks: [{
		name: {
			'en-us': "Acidic Mucus",
			'fr-fr': "Mucus Acide",
			'es-es': "Mucosidad Ácida",
			'it-it': "Mucosa Acida",
			'pt-br': "Acidic Mucus",
			'de-de': "Ätzender Schleim"
		},

		effect: {
			'en-us': "This attack does 50 damage for each of your opponent's Pokémon in play that has an Ability.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chacun des Pokémon en jeu de votre adversaire ayant un talent.",
			'es-es': "Este ataque hace 50 puntos de daño por cada uno de los Pokémon en juego de tu rival que tenga una habilidad.",
			'it-it': "Questo attacco infligge 50 danni per ogni Pokémon in gioco del tuo avversario che ha un'abilità.",
			'pt-br': "This attack does 50 damage for each of your opponent's Pokémon in play that has an Ability.",
			'de-de': "Diese Attacke fügt für jedes Pokémon deines Gegners im Spiel, das eine Fähigkeit hat, 50 Schadenspunkte zu."
		},

		damage: "50×",
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Fighting Tackle",
			'fr-fr': "Charge Combative",
			'es-es': "Placaje Lucha",
			'it-it': "Azione da Combattente",
			'pt-br': "Fighting Tackle",
			'de-de': "Kampf-Tackle"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon V, this attack does 80 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 80 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 80 danni in più.",
			'pt-br': "If your opponent's Active Pokémon is a Pokémon V, this attack does 80 more damage.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Grass", "Fire"]
	}],

	retreat: 1,
	dexId: [841],

	evolveFrom: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'it-it': "Applin",
		'pt-br': "Applin",
		'de-de': "Knapfel"
	},

	description: {
		'en-us': "It flies on wings of apple skin and spits a powerful acid. It can also change its shape into that of an apple."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574168,
				tcgplayer: 246918
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574168,
				tcgplayer: 246918
			}
		},
	],
}

export default card
