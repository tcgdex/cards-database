import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
		es: "Nidoran♀",
		it: "Nidoran ♀",
		de: "Nidoran♀",
		'pt-br': "Nidoran♀",
		ko: "니드런♀"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Call for Family",
			fr: "Appel à la Famille"
		},

		effect: {
			en: "Put 1 random Nidoran♂ from your deck onto your Bench.",
			fr: "Placez une carte Nidoran♂ au hasard de votre deck sur votre Banc."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Females are more sensitive to smells than males. While foraging, they'll use their whiskers to check wind direction and stay downwind of predators.",
		fr: "Son odorat est plus développé que celui du mâle.\nQuand Nidoran♀ cherche à manger, il reste dans\nle sens du vent, qu'il détecte avec ses vibrisses.",
		es: "Posee un olfato más fino que los Nidoran♂. Usa\nlos bigotes para percibir la dirección del viento y\nbuscar comida a sotavento de sus depredadores.",
		it: "È più sensibile agli odori rispetto ai maschi.\nCapta le correnti d'aria con le vibrisse e si\nposiziona sottovento per cercare le prede.",
		de: "Sie sind geruchsempfindlicher als Nidoran♂.\nAuf Nahrungssuche folgen sie der Windrichtung,\ndie sie mit ihren Tasthaaren ermitteln.",
		'pt-br': "As fêmeas possuem um olfato mais aguçado.\nAo procurar por comida, usam seus bigodes para\nchecar a direção do vento e evitar predadores.",
		ko: "수컷보다 냄새에 민감하다.\n수염으로 바람의 방향을 확인하면서\n흘러온 냄새로 먹이를 찾는다."
	}
}

export default card
