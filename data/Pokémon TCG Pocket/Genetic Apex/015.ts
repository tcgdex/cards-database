import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Parasect",
		fr: "Parasect",
		es: "Parasect",
		it: "Parasect",
		de: "Parasek",
		'pt-br': "Parasect",
		ko: "파라섹트"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	evolveFrom: {
		en: "Paras"
	},

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			de: "Schlitzer",
			'pt-br': "Talho",
			ko: "베어가르기"
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "The bug is mostly dead, with the mushroom on its back having become the main body. If the mushroom comes off, the bug stops moving.",
		fr: "L'insecte est quasiment mort, à ce stade,\net le champignon est devenu le véritable cerveau.\nSi on l'ôte de son dos, il ne peut plus bouger.",
		es: "La mayor parte de su cuerpo está atrofiada,\nexcepto la seta del dorso, que controla al resto.\nSi se desprende, Parasect ya no podrá moverse.",
		it: "La parte essenziale di questo Pokémon,\npraticamente morto, è costituita dal fungo sulla\nsua schiena. Se si stacca, non può più muoversi.",
		de: "Der Pilz auf seinem Rücken ist sein wichtigstes\nKörperteil. Der Rest ist quasi leblos und kann\nsich ohne den Pilz nicht bewegen.",
		'pt-br': "A maior parte do seu corpo está morta, exceto pelo cogumelo\nque está nas suas costas e que controla o resto. Se o cogumelo\nse desprender do corpo, este Pokémon não conseguirá se mover.",
		ko: "벌레는 거의 죽은 상태이고\n본체는 등의 버섯이다.\n떨어지면 더는 움직일 수 없다."
	},

	boosters: ["pikachu"]
}

export default card
