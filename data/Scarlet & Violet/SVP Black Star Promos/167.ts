import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Flareon",
		pt: "Flareon",
		fr: "Pyroli",
		de: "Flamara",
		es: "Flareon",
		it: "Flareon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire"],

			name: {
				en: "Destructive Flame",
				pt: "Chama Destruidora",
				fr: "Flamme Destructrice",
				de: "Verzehrende Flamme",
				es: "Llama Destructiva",
				it: "Devastofiamma"
			},

			effect: {
				en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
				pt: "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
				es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario."
			},

			damage: 30
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],

			name: {
				en: "Fighting Blaze",
				pt: "Luta Labareda",
				fr: "Brasier Combatif",
				de: "Feuerfäuste",
				es: "Llamarada Luchadora",
				it: "Fiammata Combattente"
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
		},
	],

	retreat: 2,
	regulationMark: "G",
	illustrator: "SIE NANAHARA"
}

export default card