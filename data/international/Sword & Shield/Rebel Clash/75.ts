import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [36],

	name: {
		'en-us': "Clefable",
		'fr-fr': "Mélodelfe",
		'es-es': "Clefable",
		'it-it': "Clefable",
		'pt-br': "Clefable",
		'de-de': "Pixi"
	},

	illustrator: "miki kudo",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
		'de-de': "Piepi"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Prankish",
				'fr-fr': "Plaisantin",
				'es-es': "Travieso",
				'it-it': "Giocherellone",
				'pt-br': "Arteiro",
				'de-de': "Schelmenstreich"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put an Energy attached to your opponent's Active Pokémon on top of their deck.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez placer une Énergie attachée au Pokémon Actif de votre adversaire sur le dessus de son deck.",
				'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 1 Energía unida al Pokémon Activo de tu rival en la parte superior de su baraja.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prendere un'Energia assegnata al Pokémon attivo del tuo avversario e metterla in cima al suo mazzo.",
				'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá colocar 1 Energia ligada ao Pokémon Ativo do seu oponente como a carta de cima do baralho dele(a).",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 an das Aktive Pokémon deines Gegners angelegte Energie auf sein Deck legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Moon Kick",
				'fr-fr': "Coup d'Pied Lunaire",
				'es-es': "Patada Lunar",
				'it-it': "Calcioluna",
				'pt-br': "Chute Lunar",
				'de-de': "Mondkick"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 110,
	types: ["Psychic"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457793,
				tcgplayer: 213161
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457793,
				tcgplayer: 213161
			}
		},
	],
}

export default card
