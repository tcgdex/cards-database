import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Cursola",
		fr: "Corayôme de Galar",
		es: "Cursola de Galar",
		it: "Cursola di Galar",
		pt: "Cursola de Galar",
		de: "Galar-Gorgasonn"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Galarian Corsola",
		fr: "Corayon de Galar",
		es: "Corsola de Galar",
		it: "Corsola di Galar",
		pt: "Corsola de Galar",
		de: "Galar-Corasonn"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		en: "Be cautious of the ectoplasmic body surrounding its soul. You'll become stiff as stone if you touch it."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Force Regeneration",
			fr: "Régénération Forcée",
			de: "Zwangsregeneration",
			es: "Reanimación a la Fuerza",
			pt: "Regeneração Forçada",
			it: "Rigenerazione Forzata"
		},

		effect: {
			en: "Put a Basic Pokémon V from your opponent's discard pile onto their Bench. If you do, put damage counters on that Pokémon until its remaining HP is 30.",
			fr: "Placez un Pokémon-V de base de la pile de défausse de votre adversaire sur son Banc. Dans ce cas, placez des marqueurs de dégâts sur ce Pokémon-là jusqu'à ce qu'il ne lui reste que 30 PV.",
			de: "Lege 1 Basis-Pokémon-V aus dem Ablagestapel deines Gegners auf seine Bank. Wenn du das machst, lege so lange Schadensmarken auf jenes Pokémon, bis seine verbleibenden KP gleich 30 sind.",
			es: "Pon 1 Pokémon V Básico de la pila de descartes de tu rival en su Banca. Si lo haces, pon contadores de daño en ese Pokémon hasta que le queden 30 PS.",
			pt: "Coloque 1 Pokémon V Básico da pilha de descarte do seu oponente no Banco dele(a). Se fizer isto, coloque contadores de dano naquele Pokémon até o PS restante dele ser 30.",
			it: "Prendi un Pokémon-V Base dalla pila degli scarti del tuo avversario e mettilo nella sua panchina. Se lo fai, metti dei segnalini danno su quel Pokémon finché i suoi PS rimanenti diventano 30."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			de: "Spukschuss",
			es: "Disparo Embrujado",
			pt: "Tiro Assustador",
			it: "Colpomistero"
		},

		damage: 80
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582632
	}
}

export default card