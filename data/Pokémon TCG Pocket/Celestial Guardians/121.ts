import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Klefki",
		fr: "Trousselin",
		es: "Klefki",
		it: "Klefki",
		de: "Clavion",
		'pt-br': "Klefki",
		ko: "클레피"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		en: "Once it absorbs a key's metal ions, it discards the key without a second thought. However, it will hang on to keys it favors for decades.",
		fr: "Dès qu'il a absorbé les ions métalliques d'une clé,\nil s'en débarrasse. Néanmoins, s'il en trouve une\nqui lui plaît, il la gardera pendant des années.",
		es: "No duda en deshacerse de las llaves una vez\nabsorbidos sus iones metálicos, aunque, si una\nle gusta de verdad, la atesorará durante décadas.",
		it: "Quando ha finito di assorbire gli ioni metallici\nda una chiave la getta via subito, ma se una\ngli va davvero a genio la conserva per decenni.",
		de: "Sobald es die Metall-Ionen eines Schlüssels eingesaugt hat,\nwirft es ihn einfach weg. Seine Lieblingsschlüssel behält es\njedoch viele Jahre.",
		'pt-br': "Depois de absorver os íons metálicos de uma chave, este\nPokémon a descarta sem pensar duas vezes. No entanto,\nguarda suas chaves preferidas por várias décadas.",
		ko: "금속 이온을 모두 흡수한 열쇠는\n보통 미련 없이 버려 버리지만\n마음에 들면 몇십 년이고 가지고 다닌다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Unlock",
			fr: "Déverrouillage",
			es: "Abrir el Cerrojo",
			it: "Apertura",
			de: "Aufschließen",
			'pt-br': "Destrancar",
			ko: "언록"
		},

		damage: 10,
		cost: ["Metal"],

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			de: "Ziehe 1 Karte.",
			'pt-br': "Compre 1 carta.",
			ko: "자신의 덱을 1장 뽑는다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card