import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Regidrago VSTAR",
		fr: "Regidrago VSTAR",
		es: "Regidrago V-ASTRO",
		it: "Regidrago V ASTRO",
		pt: "Regidrago V-ASTRO",
		de: "Regidrago VSTAR"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],

	evolveFrom: {
		en: "Regidrago V",
		fr: "Regidrago-V",
		es: "Regidrago V",
		it: "Regidrago-V",
		pt: "Regidrago V",
		de: "Regidrago-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Grass", "Fire"],

		name: {
			en: "Apex Dragon",
			fr: "Dragon Apex",
			es: "Dragón Ápex",
			it: "Drago Apex",
			pt: "Dragão Superpredador",
			de: "Apex-Drache"
		},

		effect: {
			en: "Choose an attack from a Dragon Pokémon in your discard pile and use it as this attack.",
			fr: "Choisissez une attaque d'un Pokémon Dragon de votre pile de défausse et utilisez-la en tant que cette attaque.",
			es: "Elige 1 ataque de 1 de los Pokémon Dragon de tu pila de descartes y úsalo para este ataque.",
			it: "Scegli un attacco di un Pokémon Dragon nella tua pila degli scarti e usalo al posto di questo attacco.",
			pt: "Escolha um ataque de um Pokémon Dragon da sua pilha de descarte e use-o como este ataque.",
			de: "Wähle 1 Attacke eines Dragon-Pokémon in deinem Ablagestapel und setze sie als diese Attacke ein."
		}
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card