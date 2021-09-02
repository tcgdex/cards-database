import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Amoonguss",
		fr: "Gaulet",
		es: "Amoonguss",
		it: "Amoonguss",
		pt: "Amoonguss",
		de: "Hutsassa"
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
		en: "Foongus",
		fr: "Trompignon",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sporprise",
				fr: "Sporprise",
				es: "Emboscada Espora",
				it: "Sporpresa",
				pt: "Esporo Surpresa",
				de: "Sporraschung"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. If you do, your opponent’s Active Pokémon is now Confused and Poisoned.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez utiliser cette capacité spéciale. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Si lo haces, el Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Se lo fai, il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				pt: "Ao jogar este Pokémon da sua mão para evoluir 1 de seus Pokémon, você poderá usar essa Habilidade. Se você fizer isso, o Pokémon Ativo do seu oponente ficará Confuso e Envenenado.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Wenn du das machst, ist das Aktive Pokémon deines Gegners jetzt verwirrt und vergiftet."
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
				en: "Rising Lunge",
				fr: "Botte Secrète",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
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



}

export default card
