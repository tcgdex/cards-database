import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Horsea",
		fr: "Hypotrempe",
		es: "Horsea",
		it: "Horsea",
		de: "Seeper",
		'pt-br': "Horsea",
		ko: "쏘드라"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			de: "Aquaknarre",
			'pt-br': "Revólver d'Água",
			ko: "물대포"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits out pitch-black ink and escapes.",
		fr: "Il vit dans les mers calmes. Quand on l'attaque,\nil crache de l'encre noire et profite de la diversion\npour s'enfuir.",
		es: "Habita en mares de aguas tranquilas.\nSi se siente en peligro, expulsará por la\nboca una densa tinta negra para poder huir.",
		it: "Vive in mari dalle correnti tranquille.\nQuando viene attaccato spruzza inchiostro\nnero e ne approfitta per fuggire.",
		de: "Es lebt in Meeren mit ruhigem Gezeitenstrom.\nWird es angegriffen, versprüht es tiefschwarze\nTinte und ergreift daraufhin die Flucht.",
		'pt-br': "Horsea vive em oceanos com correntezas\ntranquilas. Quando está sob ataque, este\nPokémon cospe tinta preta e escapa.",
		ko: "잔잔하게 흐르는 고요한 바다에\n산다. 습격당하면 새까만\n먹물을 내뿜고 그 틈에 도망친다."
	},

	boosters: ["pikachu"]
}

export default card
