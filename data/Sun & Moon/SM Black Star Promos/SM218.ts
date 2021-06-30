import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Buzzwole",
		fr: "Mouscoto",
		es: "Buzzwole",
		it: "Buzzwole",
		pt: "Buzzwole",
		de: "Masskito"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Beast Boost",
			fr: "Boost Chimère",
			es: "Ultraimpulso",
			it: "Ultraboost",
			pt: "Ultraimpulso",
			de: "Bestien-Boost"
		},

		effect: {
			en: "This Pokémon’s attacks do 20 more damage to your opponent’s Active Pokémon for each Prize card you have taken (before applying Weakness and Resistance).",
			fr: "Pour chaque carte Récompense que vous avez récupérée, les attaques de ce Pokémon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques de este Pokémon hacen 20 puntos de daño más al Pokémon Activo de tu rival por cada carta de Premio que hayas cogido (antes de aplicar Debilidad y Resistencia).",
			it: "Gli attacchi di questo Pokémon infliggono 20 danni in più al Pokémon attivo del tuo avversario per ogni carta Premio che hai preso, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques deste Pokémon causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente para cada carta de Prêmio que você pegou (antes de aplicar Fraqueza e Resistência).",
			de: "Die Attacken dieses Pokémon fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr mal der Anzahl der von dir genommenen Preiskarten zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		name: {
			en: "Touchdown",
			fr: "Touchdown",
			es: "Gol",
			it: "Meta",
			pt: "Aterrissagem",
			de: "Touchdown"
		},

		damage: 60,

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card