import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		es: "Gengar",
		it: "Gengar",
		pt: "Gengar",
		de: "Gengar"
	},

	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shadow Pain",
				fr: "Douleur Ombre",
				es: "Dolor Sombra",
				it: "Supplizio Oscuro",
				pt: "Dor Sombria",
				de: "Schattenschmerz"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 6 damage counters on your opponent’s Pokémon-GX and Pokémon-EX in any way you like.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 6 marqueurs de dégâts sur les Pokémon-GX et Pokémon-EX de votre adversaire, de la manière que vous voulez.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner 6 contadores de daño en los Pokémon-GX y Pokémon-EX de tu rival de la manera que desees.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi distribuire a piacimento sei segnalini danno sui Pokémon-GX e i Pokémon-EX del tuo avversario.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode colocar 6 contadores de dano nos Pokémon-GX e Pokémon-EX do seu oponente como desejar.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 6 Schadensmarken beliebig auf die Pokémon-GX und Pokémon-EX deines Gegners legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twilight Poison",
				fr: "Poison Nocturne",
				es: "Veneno Ocaso",
				it: "Veleno Crepuscolare",
				pt: "Veneno do Crepúsculo",
				de: "Dämmergift"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0
}

export default card
