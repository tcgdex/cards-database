import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		es: "Gengar",
		it: "Gengar",
		de: "Gengar",
		'pt-br': "Gengar",
		ko: "팬텀"
	},

	illustrator: "Midori Harada",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [94],
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Haunter"
	},

	description: {
		en: "To steal the life of its target, it slips into the prey's shadow and silently waits for an opportunity.",
		fr: "Il se cache dans l'ombre de sa victime et attend\npatiemment le bon moment pour lui voler sa vie.",
		es: "Para quitarle la vida a su presa, se desliza en su\nsombra y espera su oportunidad en silencio.",
		it: "Per sottrarre energia alla vittima si\nnasconde nella sua ombra e attende\nin silenzio il momento opportuno.",
		de: "Um Beute zu erlegen, versteckt es sich\nin deren Schatten und wartet still auf\neine günstige Gelegenheit.",
		'pt-br': "Este Pokémon aguarda pela oportunidade\nperfeita para se esconder na sombra de sua\npresa e roubar a vida dela.",
		ko: "생명을 빼앗기로 정한 먹잇감의\n그림자에 숨어들어\n꼼짝하지 않고 기회를 노린다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
			es: "Hipnorrayo",
			it: "Ipnobomba",
			de: "Hypnoschuss",
			'pt-br': "Borrifada Hipnótica",
			ko: "최면파동"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt schläft.",
			
			ko: "상대의 배틀 포켓몬을 잠듦으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card
