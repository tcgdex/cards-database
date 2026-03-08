import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [134],
	set: Set,

	name: {
		en: "Vaporeon",
		pt: "Vaporeon",
		fr: "Aquali",
		de: "Aquana",
		es: "Vaporeon",
		it: "Vaporeon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],

			name: {
				en: "Spiral Drain",
				pt: "Dreno Espiral",
				fr: "Spirale Épuisante",
				de: "Spiralsauger",
				es: "Drenaje Espiral",
				it: "Assorbimento Spirale"
			},

			effect: {
				en: "Heal 30 damage from this Pokémon.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni."
			},

			damage: 30
		},
		{
			cost: ["Water", "Colorless", "Colorless"],

			name: {
				en: "Fighting Whirlpool",
				pt: "Luta Redemoinho",
				fr: "Tourbillon Combatif",
				de: "Strudelfäuste",
				es: "Remolino Luchador",
				it: "Mulinello Combattente"
			},

			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 90 pontos de dano a mais.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 90 dégâts supplémentaires.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex oder Pokémon-V ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 90 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 90 danni in più."
			},

			damage: "90+"
		}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "Taira Akitsu"
}

export default card