import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Cherrim",
		fr: "Ceriflor",
		es: "Cherrim",
		it: "Cherrim",
		de: "Kinoso",
		'pt-br': "Cherrim",
		ko: "체리꼬"
	},

	illustrator: "Midori Harada",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Cherubi"
	},

	description: {
		en: "As a bud, it barely moves. It sits still, placidly waiting for sunlight to appear.",
		fr: "Pendant sa période de bourgeonnement, il reste\npresque totalement immobile et attend que le soleil se lève.",
		es: "Permanece casi inmóvil cerrado en un capullo\na la espera de que lo bañen los rayos del sol.",
		it: "Quando è un bocciolo rimane pressoché\nimmobile in attesa che spunti il sole.",
		de: "Als Knospe verhält es sich ruhig und bewegt sich kaum,\nwährend es geduldig auf Sonnenschein wartet.",
		'pt-br': "Como um botão, quase não se move. Fica parado,\nesperando tranquilamente a luz do sol aparecer.",
		ko: "봉오리일 때는 얌전하고\n거의 움직이지 않는다. 햇빛이\n들기를 가만히 기다리고 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Worry Seed",
			fr: "Soucigraine",
			es: "Abatidoras",
			it: "Affannoseme",
			de: "Sorgensamen",
			'pt-br': "Semente de Preocupação",
			ko: "고민씨"
		},

		damage: 40,
		cost: ["Grass"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confused.",
			ko: "상대의 배틀 포켓몬을 혼란으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
