import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Drampa",
		fr: "Draïeul",
		es: "Drampa",
		it: "Drampa",
		de: "Sen-Long",
		'pt-br': "Drampa",
		ko: "할비롱"
	},

	illustrator: "Shinji Kanda",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [780],
	hp: 100,
	types: ["Dragon"],

	description: {
		en: "The mountains it calls home are nearly two miles in height. On rare occasions, it descends to play with the children living in the towns below.",
		fr: "Il vit dans les montagnes culminant à plus\nde 3 000 m d'altitude. Il se rend parfois\nen ville pour jouer avec les petits enfants.",
		es: "Habita en montañas de más de 3000 m de altura.\nEn ocasiones se acerca a los pueblos para jugar con los niños.",
		it: "Vive su montagne che superano i 3.000 metri di altezza.\nQualche volta scende in città per giocare con i bambini.",
		de: "Es lebt auf Bergen, die mehr als 3000 m hoch sind.\nGanz selten zeigt es sich auch in Städten, wo es\nvergnügt mit den Kindern spielt.",
		'pt-br': "As montanhas onde mora têm mais de 3 km de altura.\nEm raras ocasiões, Drampa desce para brincar\ncom as crianças dos vilarejos abaixo.",
		ko: "해발 3000m가 넘는\n산에 산다. 드물게 마을로\n내려와 아이들과 논다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Berserk",
			fr: "Folle Furie",
			es: "Cólera",
			it: "Furore",
			de: "Wutausbruch",
			'pt-br': "Furioso",
			ko: "발끈"
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "If any of your Benched Pokémon have damage on them, this attack does 50 more damage.",
			fr: "Si au moins un de vos Pokémon de Banc a subi des dégâts, cette attaque inflige 50 dégâts supplémentaires.",
			es: "Si alguno de tus Pokémon en Banca ya tiene daño, este ataque hace 50 puntos de daño más.",
			it: "Se almeno uno dei tuoi Pokémon in panchina è danneggiato, questo attacco infligge 50 danni in più.",
			de: "Wenn mindestens 1 der Pokémon auf deiner Bank bereits Schaden zugefügt wurde, fügt diese Attacke 50 Schadenspunkte mehr zu.",
			'pt-br': "Se algum dos seus Pokémon no Banco estiver danificado, este ataque causará 50 pontos de dano a mais.",
			ko: "자신의 벤치 포켓몬이 데미지를 받고 있다면 50데미지를 추가한다."
		}
	}],

	retreat: 2,
	boosters: ["solgaleo"]
}

export default card
