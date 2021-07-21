import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		113,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Healing Pirouette",
				fr: "Pirouette Apaisante",
				es: "Pirueta Curativa",
				it: "Curoetta",
				pt: "Pirueta Curativa",
				de: "Heilender Reigen"
			},
			effect: {
				en: "Heal 20 damage from each of your Pokémon.",
				fr: "Soignez 20 dégâts à chacun de vos Pokémon.",
				es: "Cura 20 puntos de daño a cada uno de tus Pokémon.",
				it: "Cura ciascuno dei tuoi Pokémon da 20 danni.",
				pt: "Cure 20 pontos de dano de cada um dos seus Pokémon.",
				de: "Heile 20 Schadenspunkte bei jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sympathetic Slap",
				fr: "Gifle Cordiale",
				es: "Bofetada Compasiva",
				it: "Buffetto Cordiale",
				pt: "Tapa Solidário",
				de: "Mitfühlender Klaps"
			},
			effect: {
				en: "If your opponent’s Active Pokémon already has any damage counters on it before this attack does damage, this attack does nothing.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueur de dégâts avant que cette attaque n’inflige des dégâts, cette attaque ne fait rien.",
				es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él antes de que este ataque inflija daño, este ataque no hace nada.",
				it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno prima che questo attacco infligga danni, questo attacco non ha effetto.",
				pt: "Se o Pokémon Ativo do seu oponente já tiver contadores de dano nele antes deste ataque causar dano, este ataque não fará nada.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, bevor diese Attacke Schaden zufügt, hat diese Attacke keine Auswirkungen."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
