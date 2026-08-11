import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'es-es': "Haunter",
		'it-it': "Haunter",
		'pt-br': "Haunter",
		'de-de': "Alpollo"
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
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Gothic Fear",
				'fr-fr': "Peur Gothique",
				'es-es': "Temor Gótico",
				'it-it': "Timorgotico",
				'pt-br': "Medo Gótico",
				'de-de': "Lähmende Angst"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may leave both Active Pokémon Confused.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez laisser les deux Pokémon Actifs Confus.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes dejar a ambos Pokémon Activos Confundidos.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi lasciare entrambi i Pokémon attivi confusi.",
				'pt-br': "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode deixar ambos os Pokémon Ativos Confusos.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du beide Aktiven Pokémon verwirren."
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
				'en-us': "Poison Ring",
				'fr-fr': "Anneau de Poison",
				'es-es': "Anillo Venenoso",
				'it-it': "Velenanello",
				'pt-br': "Anel de Veneno",
				'de-de': "Giftring"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned. That Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Ce dernier ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Ese Pokémon no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Aquele Pokémon não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Dieses Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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

	description: {
		'en-us': "It licks with its gaseous tongue to steal the victim's life force. It lurks in darkness for prey.",
	},

	thirdParty: {
		cardmarket: 286305,
		tcgplayer: 107178
	}
}

export default card
