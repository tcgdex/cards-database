import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Cynthia's Roserade",
		fr: "Roserade de Cynthia",
		de: "Cynthias Roserade",
		it: "Roserade di Camilla",
		es: "Roserade de Cintia",
		pt: "Roserade da Cíntia",
		'es-mx': "Roserade de Cynthia"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cheer On to Glory",
			fr: "Encouragement pour la Gloire",
			de: "Ruhmesbeifall",
			it: "Tifo Esaltante",
			es: "Ovación de Gloria",
			pt: "Grito de Glória",
			'es-mx': "Canto de Gloria"
		},

		effect: {
			en: "Attacks used by your Cynthia's Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques utilisées par vos Pokémon de Cynthia infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			de: "Die von deinen Cynthias Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Gli attacchi usati dai tuoi Pokémon di Camilla infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			es: "Los ataques usados por tus Pokémon de Cintia hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			pt: "Os ataques usados pelos seus Pokémon da Cíntia causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Los ataques usados por tus Pokémon de Cynthia hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
			de: "Blattschritt",
			it: "Passofoglia",
			es: "Paso Hoja",
			pt: "Passo de Folha",
			'es-mx': "Paso de Hoja"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "I",

	variants_detailed: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	]
}

export default card
