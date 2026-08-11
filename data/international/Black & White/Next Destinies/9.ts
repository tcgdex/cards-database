import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Amoonguss",
		'fr-fr': "Gaulet",
		'es-es': "Amoonguss",
		'it-it': "Amoonguss",
		'pt-br': "Amoonguss",
		'de-de': "Hutsassa"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		591,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Foongus",
		'fr-fr': "Trompignon",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sporprise",
				'fr-fr': "Sporprise",
				'es-es': "Emboscada Espora",
				'it-it': "Sporpresa",
				'pt-br': "Esporo Surpresa",
				'de-de': "Sporraschung"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. If you do, your opponent’s Active Pokémon is now Confused and Poisoned.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez utiliser cette capacité spéciale. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Si lo haces, el Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Se lo fai, il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				'pt-br': "Ao jogar este Pokémon da sua mão para evoluir 1 de seus Pokémon, você poderá usar essa Habilidade. Se você fizer isso, o Pokémon Ativo do seu oponente ficará Confuso e Envenenado.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Wenn du das machst, ist das Aktive Pokémon deines Gegners jetzt verwirrt und vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Rising Lunge",
				'fr-fr': "Botte Secrète",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It lures prey close by dancing and waving its arm caps, which resemble Poké Balls, in a swaying motion.",
	},

	thirdParty: {
		cardmarket: 280234,
		tcgplayer: 83532
	}
}

export default card
