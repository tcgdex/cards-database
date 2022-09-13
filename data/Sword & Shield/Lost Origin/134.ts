import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Goodra",
		fr: "Muplodocus de Hisui",
		es: "Goodra de Hisui",
		it: "Goodra di Hisui",
		pt: "Goodra de Hisui",
		de: "Hisui Viscogon"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	evolveFrom: {
		en: "Hisuian Sliggoo",
		fr: "Colimucus de Hisui",
		es: "Sliggoo de Hisui",
		it: "Sliggoo di Hisui",
		pt: "Sliggoo de Hisui",
		de: "Hisui-Viscargot"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Metal Lodging",
			fr: "Abri Métal",
			es: "Guarida Metálica",
			it: "Alloggio Metallo",
			pt: "Alojamento de Metal",
			de: "Metallhaus"
		},

		effect: {
			en: "Prevent all damage done to each of your Basic Pokémon that has any Metal Energy attached by attacks from your opponent's Pokémon V.",
			fr: "Évitez tous les dégâts infligés à chacun de vos Pokémon de base ayant de l'Énergie Metal attachée par les attaques des Pokémon-V de votre adversaire.",
			es: "Evita todo el daño infligido por ataques de los Pokémon V de tu rival a cada uno de tus Pokémon Básicos que tenga alguna Energía Metal unida a él.",
			it: "Previeni tutti i danni inflitti a ciascuno dei tuoi Pokémon Base che ha delle Energie Metal assegnate dagli attacchi dei Pokémon-V del tuo avversario.",
			pt: "Previna todo o dano causado a cada um dos seus Pokémon Básicos que tiver alguma Energia Metal ligada a ele por ataques dos Pokémon V do seu oponente.",
			de: "Verhindere allen Schaden durch Attacken von Pokémon-V deines Gegners, der jedem deiner Basis-Pokémon zugefügt wird, an das mindestens 1 Metal-Energie angelegt ist."
		}
	}],

	attacks: [{
		cost: ["Water", "Metal", "Colorless"],

		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			pt: "Impacto Pesado",
			de: "Schwerer Einschlag"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	}
}

export default card