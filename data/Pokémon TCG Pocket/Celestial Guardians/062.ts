import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Helioptile",
		fr: "Galvaran",
		es: "Helioptile",
		it: "Helioptile",
		de: "Eguana",
		'pt-br': "Helioptile",
		ko: "목도리키텔"
	},

	illustrator: "0313",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "When spread, the frills on its head act like solar panels, generating the power behind this Pokémon's electric moves.",
		fr: "Il absorbe les rayons du soleil en dépliant la peau\nde sa tête pour produire l'électricité nécessaire\nà ses puissantes capacités Électrik.",
		es: "Extiende los pliegues de la cabeza para absorber\nla luz del sol y convertirla en electricidad, con la\nque realiza potentes ataques de tipo Eléctrico.",
		it: "Distende le pieghe sulla testa per raccogliere\nla luce solare e produrre energia elettrica che\nusa per sferrare potenti mosse di tipo Elettro.",
		de: "Es breitet die Hautlappen an seinem Kopf aus,\num mithilfe des Sonnenlichts Strom zu erzeugen\nund mächtige Elektro-Attacken einzusetzen.",
		'pt-br': "Quando abertas, as extensões na sua cabeça\nservem como painéis solares, gerando a energia\nusada em seus movimentos elétricos.",
		ko: "머리에 있는 주름을 펼쳐서\n태양의 빛으로 발전하면 파워풀한\n전기 기술을 쓸 수 있게 된다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			es: "Patada Destrucción",
			it: "Calcio Esplosivo",
			de: "Schmetterkick",
			'pt-br': "Chute Poderoso",
			ko: "걷어차기"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card