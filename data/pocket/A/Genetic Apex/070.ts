import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Horsea",
		'fr-fr': "Hypotrempe",
		'es-es': "Horsea",
		'it-it': "Horsea",
		'de-de': "Seeper",
		'pt-br': "Horsea",
		'ko-kr': "쏘드라"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",

	dexId: [116],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'de-de': "Aquaknarre",
			'pt-br': "Revólver d'Água",
			'ko-kr': "물대포"
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
		'en-us': "Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits out pitch-black ink and escapes.",
		'fr-fr': "Il vit dans les mers calmes. Quand on l'attaque,\nil crache de l'encre noire et profite de la diversion\npour s'enfuir.",
		'es-es': "Habita en mares de aguas tranquilas.\nSi se siente en peligro, expulsará por la\nboca una densa tinta negra para poder huir.",
		'it-it': "Vive in mari dalle correnti tranquille.\nQuando viene attaccato spruzza inchiostro\nnero e ne approfitta per fuggire.",
		'de-de': "Es lebt in Meeren mit ruhigem Gezeitenstrom.\nWird es angegriffen, versprüht es tiefschwarze\nTinte und ergreift daraufhin die Flucht.",
		'pt-br': "Horsea vive em oceanos com correntezas\ntranquilas. Quando está sob ataque, este\nPokémon cospe tinta preta e escapa.",
		'ko-kr': "잔잔하게 흐르는 고요한 바다에\n산다. 습격당하면 새까만\n먹물을 내뿜고 그 틈에 도망친다."
	},

	boosters: ["pikachu"]
}

export default card
