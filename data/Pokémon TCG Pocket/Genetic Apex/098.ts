import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
const card: Card = {
	set: Set,

	name: {
		en: "Magneton",
		fr: "Magnéton",
		es: "Magneton",
		it: "Magneton",
		de: "Magneton",
		ko: "레어코일",
		'pt-br': "Magneton"
	},

	illustrator: "kirisAki",
	category: "Pokemon",

	dexId: [82],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti",
		es: "Magnemite",
		it: "Magnemite",
		pt: "Magnemite",
		de: "Magnetilo"
	},

	abilities: [{
		type: "Ability",
		name: {
			en: "Volt Charge",
			fr: "Charge Volt",
			es: "Carga Voltio",
			it: "Carica Volt",
			de: "Voltladung",
			ko: "볼트 차지",
			'pt-br': "Carga Voltaica"
		},
		effect: {
			en: "Once during your turn, you may take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez prendre une Énergie {L} de votre zone Énergie et l'attacher à ce Pokémon.",
			es: "Una vez durante tu turno, puedes unir 1 Energía {L} de tu área de Energía a este Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi prendere un'Energia {L} dalla tua Zona Energia e assegnarla a questo Pokémon.",
			de: "Einmal während deines Zuges kannst du 1 {L}-Energie aus deinem Energiebereich an dieses Pokémon anlegen.",
			ko: "자신의 차례에 1번 사용할 수 있다. 자신의 에너지존에서 {L}에너지를 1개 내보내 이 포켓몬에게 붙인다.",
			'pt-br': "Uma vez durante o seu turno, você poderá pegar 1 Energia {L} da sua Zona de Energia e a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			de: "Rundumangriff",
			ko: "회전어택",
			'pt-br': "Ataque Giratório"
		},
		damage: "60"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "Three Magnemite are linked by a strong magnetic force. Earaches will occur if you get too close.",
		fr: "Le lien magnétique qui rattache ces trois Magnéti est si puissant\nqu'il fait mal aux oreilles si on s'en approche trop.",
		es: "Tres Magnemite se enlazan mediante una\nintensa fuerza magnética. Provoca un fuerte\npitido en los oídos a quien se le acerque.",
		it: "Tre Magnemite sono uniti da una\npotente forza magnetica. Se ci si\navvicina troppo, le orecchie fischiano.",
		de: "Drei Magnetilo sind durch ein starkes\nMagnetfeld verbunden. In seiner Nähe\nbekommt man Ohrensausen.",
		'pt-br': "Três Magnemite estão vinculados por uma força\nmagnética muito poderosa. Se você chegar\nmuito perto, ficará com dor de ouvido.",
		ko: "3개의 코일은 강한 자력으로\n연결되어 있다. 가까이 다가가면\n강한 귀울림에 시달리게 된다."
	},

	boosters: ["pikachu"]
}
export default card