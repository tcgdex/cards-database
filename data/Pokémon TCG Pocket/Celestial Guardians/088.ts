import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Necrozma",
		fr: "Necrozma",
		es: "Necrozma",
		it: "Necrozma",
		de: "Necrozma",
		'pt-br': "Necrozma",
		ko: "네크로즈마"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [800],
	hp: 120,
	types: ["Psychic"],

	description: {
		en: "It looks somehow pained as it rages around in search of light, which serves as its energy. It's apparently from another world.",
		fr: "Il semble souffrir dans sa recherche\ndésespérée de lumière, sa source d'énergie.\nOn pense qu'il vient d'un autre monde.",
		es: "La luz es su fuente de energía y la busca con tal desespero que da\nla impresión de que sufre. Parece ser una criatura de otro mundo.",
		it: "Pare che sia una creatura di un altro mondo. La luce è la\nsua fonte d'energia e la cerca con furia, rivelando sofferenza.",
		de: "Diese Kreatur stammt wohl aus einer anderen Welt.\nSie wirkt gequält, wenn sie auf der Suche nach Licht,\nseiner Energiequelle, herumwütet.",
		'pt-br': "Parece sentir dor ao buscar furiosamente por luz, que é a\nsua fonte de energia. Aparentemente, vem de outro mundo.",
		ko: "에너지인 빛을 찾아 날뛰는 모습은\n어딘지 모르게 괴로워 보인다.\n다른 세계의 존재인 듯하다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Prismatic Laser",
			fr: "Laser Prisme",
			es: "Láser Prisma",
			it: "Prismalaser",
			de: "Prisma-Laser",
			'pt-br': "Laser Prismático",
			ko: "프리즘레이저"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			ko: "자신의 다음 차례에 이 포켓몬은 기술을 사용할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lunala"]
}

export default card