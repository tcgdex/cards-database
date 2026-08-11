import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'es-es': "Ninetales",
		'it-it': "Ninetales",
		'pt-br': "Ninetales",
		'de-de': "Vulnona"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bright Look",
				'fr-fr': "Regard Alerte",
				'es-es': "Mirada Alerta",
				'it-it': "Brillasguardo",
				'pt-br': "Visual Brilhante",
				'de-de': "Blendender Blick"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may switch 1 of your opponent’s Benched Pokémon with his or her Active Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez échanger 1 des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes cambiar a 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi scambiare uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode trocar 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele ou dela.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Hexed Flame",
				'fr-fr': "Flamme Maudite",
			},
			effect: {
				'en-us': "Does 50 more damage for each Special Condition affecting the Defending Pokémon.",
				'fr-fr': "Inflige 50 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Défenseur.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
	},

	thirdParty: {
		cardmarket: 280458,
		tcgplayer: 87778
	}
}

export default card
