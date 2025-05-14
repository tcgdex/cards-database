import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Sandygast",
		fr: "Bacabouh",
		es: "Sandygast",
		it: "Sandygast",
		de: "Sankabuh",
		'pt-br': "Sandygast",
		ko: "모래꿍"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		en: "If it loses its shovel, it will stick something else—like a branch—in its head to make do until it finds another shovel.",
		fr: "S'il perd sa pelle, il la remplacera par\nun autre objet, comme une branche,\nen attendant d'en trouver une nouvelle.",
		es: "Si pierde su pala, busca otra cosa para clavarse en la cabeza,\ncomo una rama, y así salir del paso hasta que encuentre otra pala.",
		it: "Se gli capita di perdere la paletta si infila in testa un ramo o\nun altro oggetto per distrarsi in attesa di trovarne una nuova.",
		de: "Wenn es seine Schaufel verliert, steckt es etwas\nanderes in seinen Kopf, zum Beispiel einen Zweig.\nSo lenkt es sich ab, bis es eine neue findet.",
		'pt-br': "Se perder sua pá, colocará qualquer coisa na cabeça,\ncomo um graveto, até encontrar outra.",
		ko: "삽을 잃어버리면\n나뭇가지 등을 대신 꽂고 다니며\n새로운 삽을 찾을 때까지 마음을 달랜다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Vibration",
			fr: "Vibration",
			es: "Vibración",
			it: "Vibrazione",
			de: "Schwingung",
			'pt-br': "Vibração",
			ko: "진동"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card