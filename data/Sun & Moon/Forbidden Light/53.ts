import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Dragalge",
		fr: "Kravarech",
		es: "Dragalge",
		it: "Dragalge",
		pt: "Dragalge",
		de: "Tandrak"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		691,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Skrelp",
		fr: "Venalgue",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Poison Point",
				fr: "Point Poison",
				es: "Punto Tóxico",
				it: "Velenopunto",
				pt: "Ponto Venenoso",
				de: "Giftdorn"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
				es: "Si este Pokémon es tu Pokémon Activo y resulta dañado por el ataque de un rival (incluso si este Pokémon queda Fuera de Combate), el Pokémon Atacante pasa a estar Envenenado.",
				it: "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo K.O., il Pokémon attaccante viene avvelenato.",
				pt: "Se este Pokémon for seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se esse Pokémon for Nocauteado), o Pokémon Atacante será Envenenado.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), ist das Angreifende Pokémon jetzt vergiftet."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Twister",
				fr: "Ouragan",
				es: "Ciclón",
				it: "Tornado",
				pt: "Twister",
				de: "Windhose"
			},
			effect: {
				en: "Flip 2 coins. For each heads, discard an Energy from your opponent’s Active Pokémon. If both of them are tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
				es: "Lanza 2 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival. Si ambas son cruz, este ataque no hace nada.",
				it: "Lancia due volte una moneta. Ogni volta che esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario. Se esce entrambe le volte croce, questo attacco non ha effetto.",
				pt: "Jogue 2 moedas. Para cada cara, descarte 1 Energia do Pokémon Ativo do seu oponente. Se as duas saírem coroa, este ataque não fará nada.",
				de: "Wirf 2 Münzen. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. Wenn beide Münzen Zahl zeigen, hat diese Attacke keine Auswirkungen."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
