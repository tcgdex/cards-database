import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Furtive Drop",
			fr: "Chute Furtive",
			es: "Caída Furtiva",
			it: "Lascito Furtivo",
			pt: "Gota Furtiva",
			de: "Hinterhältiger Fall"
		},

		effect: {
			en: "Put 1 damage counter on your opponent's Active Pokémon.",
			fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			es: "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
			it: "Metti un segnalino danno sul Pokémon attivo del tuo avversario.",
			pt: "Coloque 1 contador de dano no Pokémon Ativo do seu oponente.",
			de: "Lege 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
		}
	}],

	retreat: 0,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card