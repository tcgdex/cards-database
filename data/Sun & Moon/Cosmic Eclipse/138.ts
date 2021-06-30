import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Alolan Sandslash",
		fr: "Sablaireau d’Alola",
		es: "Sandslash de Alola",
		it: "Sandslash di Alola",
		pt: "Sandslash de Alola",
		de: "Alola-Sandamer"
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		28,
	],
	hp: 120,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Curve Strike",
				fr: "Courbe-Frappe",
				es: "Golpe Curva",
				it: "Colpo Curvo",
				pt: "Batida Curva",
				de: "Kurvenschlag"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, evita todo el daño infligido a este Pokémon por ataques durante el próximo turno de tu rival.",
				it: "Lancia una moneta. Se esce testa, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco durante il prossimo turno del tuo avversario.",
				pt: "Jogue 1 moeda. Se sair cara, prevenirá todo o dano causado a este Pokémon por ataques durante a próxima vez de jogar do seu oponente.",
				de: "Wirf 1 Münze. Verhindere bei Kopf allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken zugefügt wird."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reinforced Needle",
				fr: "Épine Renforcée",
				es: "Aguja Reforzada",
				it: "Agorobusto",
				pt: "Agulha Reforçada",
				de: "Starknadel"
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 60 more damage.",
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 60 puntos de daño más.",
				it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 60 danni in più.",
				pt: "Se este Pokémon tiver uma carta de Ferramenta Pokémon ligada a ele, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
