import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Marshadow & Machamp GX",
		fr: "Marshadow et Mackogneur GX",
		es: "Marshadow y Machamp GX",
		it: "Marshadow e Machamp GX",
		pt: "Marshadow e Machamp GX",
		de: "Marshadow & Machomei GX"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [802, 68],
	hp: 270,

	types: [
		"Fighting",
	],

	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Revenge",
				fr: "Vendetta",
				es: "Desquite",
				it: "Vendetta",
				pt: "Vingança",
				de: "Vergeltung"
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent’s attack during their last turn, this attack does 90 more damage.",
				fr: "Si l’un de vos Pokémon a été mis K.O. par les dégâts d’une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de tu rival durante su último turno, este ataque hace 90 puntos de daño más.",
				it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco del tuo avversario durante il suo ultimo turno, questo attacco infligge 90 danni in più.",
				pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque do seu oponente durante a última vez dele(a) jogar, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Hundred-Blows Impact",
				fr: "Les Cent Coups",
				es: "Impacto Golpes a Cientos",
				it: "Batosta Cento Colpi",
				pt: "Impacto de Cem Golpes",
				de: "Hundert-Hiebe-Schlag"
			},
			damage: 160,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Acme of Heroism GX",
				fr: "Summum Héroïque GX",
				es: "Apogeo del Heroísmo GX",
				it: "Atto di Eroismo GX",
				pt: "Auge do Heroísmo GX",
				de: "Gipfel des Heldentums GX"
			},
			effect: {
				en: "If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack’s cost), and if it would be Knocked Out by damage from an opponent’s attack during their next turn, it is not Knocked Out, and its remaining HP becomes 10. (You can’t use more than 1 GX attack in a game.)",
				fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), et s’il doit être mis K.O. par les dégâts d’une attaque de l’adversaire pendant son prochain tour, ce Pokémon n’est pas mis K.O. et il lui reste 10 PV. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Si este Pokémon tiene por lo menos 1 Energía adicional unida a él (además de las del coste de este ataque), y si fuese a quedar Fuera de Combate por el daño de un ataque de tu rival durante su próximo turno, no queda Fuera de Combate, y sus PS restantes pasan a ser 10. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Se questo Pokémon ha almeno un’Energia extra assegnata, in aggiunta a quelle del costo di questo attacco, e se sta per essere messo KO dai danni di un attacco del tuo avversario durante il suo prossimo turno, non viene messo KO e i suoi PS rimanenti diventano 10. Non puoi usare più di un attacco GX a partita.",
				pt: "Se este Pokémon tiver pelo menos 1 Energia adicional ligada a ele (além do custo deste ataque) e estiver prestes a ser Nocauteado pelo dano de um ataque do seu oponente durante a próxima vez dele(a) jogar, ele não será Nocauteado e o PS restante dele será 10 (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wenn an dieses Pokémon mindestens 1 extra Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke) und wenn es während des nächsten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig würde, wird es nicht kampfunfähig und seine verbleibenden KP sind gleich 10. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 370787,
		tcgplayer: 188407
	}
}

export default card
