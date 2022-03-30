import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
		es: "Haunter",
		it: "Haunter",
		pt: "Haunter",
		de: "Alpollo"
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		93,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gothic Fear",
				fr: "Peur Gothique",
				es: "Temor Gótico",
				it: "Timorgotico",
				pt: "Medo Gótico",
				de: "Lähmende Angst"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may leave both Active Pokémon Confused.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez laisser les deux Pokémon Actifs Confus.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes dejar a ambos Pokémon Activos Confundidos.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi lasciare entrambi i Pokémon attivi confusi.",
				pt: "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode deixar ambos os Pokémon Ativos Confusos.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du beide Aktiven Pokémon verwirren."
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
				en: "Poison Ring",
				fr: "Anneau de Poison",
				es: "Anillo Venenoso",
				it: "Velenanello",
				pt: "Anel de Veneno",
				de: "Giftring"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. That Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Ce dernier ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Ese Pokémon no puede retirarse durante el próximo turno de tu rival.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Aquele Pokémon não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Dieses Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},

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
	retreat: 1,



}

export default card
