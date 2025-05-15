import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Skuntank",
		fr: "Moufflair",
		es: "Skuntank",
		it: "Skuntank",
		de: "Skuntank",
		'pt-br': "Skuntank",
		ko: "스컹탱크"
	},

	illustrator: "kirisAki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Stunky"
	},

	description: {
		en: "It attacks by spraying a horribly smelly fluid from the tip of its tail. Attacks from above confound it.",
		fr: "Du bout de sa queue, il projette un liquide fétide sur ses\nadversaires. Les attaques aériennes le prennent de court.",
		es: "Ataca emitiendo un fluido maloliente por la punta\nde la cola. Los ataques aéreos lo confunden.",
		it: "Attacca spruzzando un fluido puzzolente dalla\npunta della coda. Gli attacchi dall'alto lo confondono.",
		de: "Es greift mit einer übel riechenden Substanz an,\ndie es aus der Spitze seines Schweifs versprüht.\nAngriffe von oben verblüffen es.",
		'pt-br': "Ele ataca ao espirrar um fluido com um cheiro horroroso\nda ponta de sua cauda.\nOs ataques de cima podem confundi-lo.",
		ko: "꼬리 끝에서 심한 냄새가 나는\n액체를 날려 공격하지만\n위에서 공격을 받게 되면 당황한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Poison Gas",
			fr: "Gaz Toxik",
			es: "Gas Venenoso",
			it: "Velenogas",
			de: "Giftwolke",
			'pt-br': "Gás Venenoso",
			ko: "독가스"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"],

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
