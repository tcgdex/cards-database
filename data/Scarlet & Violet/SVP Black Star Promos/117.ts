import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [478],
	set: Set,

	name: {
		en: "Froslass",
		fr: "Momartik",
		es: "Froslass",
		it: "Froslass",
		pt: "Froslass",
		de: "Frosdedje"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
		es: "Snorunt",
		it: "Snorunt",
		pt: "Snorunt",
		de: "Schneppke"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Freezing Shroud",
			fr: "Voile Glaçant",
			es: "Manto Helador",
			it: "Manto Glaciale",
			pt: "Manto Congelante",
			de: "Frosthülle"
		},

		effect: {
			en: "During Pokémon Checkup, put 1 damage counter on each Pokémon that has an Ability (both yours and your opponent's), except any Froslass.",
			fr: "Pendant le Contrôle Pokémon, placez un marqueur de dégâts sur chacun des Pokémon ayant un talent (les vôtres et ceux de votre adversaire), à l'exception de Momartik.",
			es: "Durante el Chequeo Pokémon, pon 1 contador de daño en cada Pokémon que tenga una habilidad (tanto tuyos como de tu rival), excepto en los Froslass.",
			it: "Durante il controllo Pokémon, metti un segnalino danno su ciascun Pokémon che ha un'abilità, sia tuo che del tuo avversario, a eccezione di qualsiasi Froslass.",
			pt: "Durante o Checape Pokémon, coloque 1 contador de dano em cada Pokémon que tem uma Habilidade (seus e do seu oponente), exceto por quaisquer Froslass.",
			de: "Lege beim Pokémon-Check 1 Schadensmarke auf jedes Pokémon (deine und die deines Gegners), das eine Fähigkeit hat, außer Frosdedje."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Frost Smash",
			fr: "Impact Glacial",
			es: "Golpe Gélido",
			it: "Gelocolpo",
			pt: "Pancada Congelada",
			de: "Frostschlag"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "mingo"
}

export default card