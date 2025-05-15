import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Arbok",
		fr: "Arbok",
		es: "Arbok",
		it: "Arbok",
		de: "Arbok",
		'pt-br': "Arbok",
		ko: "아보크"
	},

	illustrator: "Midori Harada",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Ekans"
	},

	description: {
		en: "After stunning its opponents with the pattern on its stomach, it quickly wraps them up in its body and waits for them to stop moving.",
		fr: "Il intimide sa proie grâce au motif situé sur\nle devant de son capuchon, puis l'enserre\njusqu'à ce que son cœur cesse de battre.",
		es: "Tras confundir a su presa con el motivo de su cuerpo, se enrosca\na su alrededor y la aferra, a la espera de que su pulso se detenga.",
		it: "Spiazza l'avversario con il disegno sul ventre,\npoi gli si avvinghia rapidamente e aspetta\nche il suo battito cardiaco si fermi.",
		de: "Es schüchtert seinen Gegner mit dem Muster auf seinem\nBauch ein und nimmt ihn dann in den Würgegriff, bis es\nkeinen Widerstand mehr spürt.",
		'pt-br': "Após atordoar os seus oponentes com as marcas\nem seu estômago, enrola-os rapidamente contra seu\ncorpo e espera eles pararem de se mover.",
		ko: "배의 무늬로 풀이 죽게 한 뒤\n재빠르게 몸으로 조여서\n상대의 고동이 멈추기를 기다린다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Venomous Fang",
			fr: "Croc-Poison",
			es: "Colmillo Nocivo",
			it: "Dentevelenoso",
			de: "Gifthauer",
			'pt-br': "Dente Venenoso",
			ko: "독이빨"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Poisoned.",
			ko: "상대의 배틀 포켓몬을 독으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card