import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Salazzle",
		'fr-fr': "Malamandre",
		'es-es': "Salazzle",
		'it-it': "Salazzle",
		'pt-br': "Salazzle",
		'de-de': "Amfira"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		758,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Hot Poison",
				'fr-fr': "Poison Bouillant",
				'es-es': "Veneno Caliente",
				'it-it': "Veleno Rovente",
				'pt-br': "Veneno Quente",
				'de-de': "Heißes Gift"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may leave your opponent’s Active Pokémon Burned and Poisoned.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé et Empoisonné.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes dejar al Pokémon Activo de tu rival Envenenado y Quemado.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario bruciato e avvelenato.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode deixar o Pokémon Ativo do seu oponente Envenenado e Queimado.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du das Aktive Pokémon deines Gegners verbrennen und vergiften."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-Flammes",
				'es-es': "Lanzallamas",
				'it-it': "Lanciafiamme",
				'pt-br': "Lança-chamas",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 90,

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
		'en-us': "For some reason, only females have been found. It creates a reverse harem of male Salandit that it lives with.",
	},

	thirdParty: {
		cardmarket: 297480,
		tcgplayer: 130762
	}
}

export default card
