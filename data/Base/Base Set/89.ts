import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Revive",
		pt: "Revive",
		fr: "Réanimation",
		de: "Beleber"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Put 1 Basic Pokémon card from your discard pile onto your Bench. Put damage counters on that Pokémon equal to half its HP (rounded down to the nearest 10). (You can't play Revive if your Bench is full.)",
		pt: "Coloque 1 card Pokémon Básico da sua pilha de descarte no seu Banco. Coloque contadores de dano naquele Pokémon igual à metade do HP dele (arredondado para baixo para o 10 mais próximo). (Você não pode jogar Revive se seu Banco estiver cheio.)",
		fr: "Placez 1 carte Pokémon de base de votre pile de défausse sur votre Banc. Placez sur lui un nombre de marqueurs de dégâts égal à la moitié de ses PV (arrondis à la dizaine inférieure la plus proche). (Vous ne pouvez pas jouer Réanimation si votre Banc est plein.)",
		de: "Lege eine Basis-Pokémon-Karte Deines Ablagestapel auf Deine Bank. Lege Schadensmarken in Höhe der Hälfte der KP des Pokémon (auf die nächste Zehnerstelle abgerundet) auf die Pokémon-Karte. (Du kannst Beleber nicht einsetzen, wenn Deine Bank voll ist.)"
	}
}

export default card
