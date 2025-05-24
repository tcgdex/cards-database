import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Bellibolt",
		fr: "Ampibidou",
		es: "Bellibolt",
		it: "Bellibolt",
		pt: "Bellibolt",
		de: "Wampitz"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Wave",
			fr: "Cage Éclair",
			es: "Onda Trueno",
			it: "Tuononda",
			pt: "Onda de Trovão",
			de: "Donnerwelle"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Two-Bump Bolt",
			fr: "Éclair Double-Choc",
			es: "Doble Panzazo Eléctrico",
			it: "Fulmine Doppio Bulbo",
			pt: "Raio Baque Duplo",
			de: "Doppelwampenblitz"
		},

		effect: {
			en: "You may discard up to 2 {L} Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser jusqu'à 2 Énergies {L} de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			es: "Puedes descartar hasta 2 Energías {L} de este Pokémon. Este ataque hace 80 puntos de daño más por cada carta que hayas descartado de esta manera.",
			it: "Puoi scartare fino a due Energie {L} da questo Pokémon. Questo attacco infligge 80 danni in più per ogni carta che hai scartato in questo modo.",
			pt: "Você pode descartar até 2 Energias {L} deste Pokémon. Este ataque causa 80 pontos de dano a mais para cada carta descartada desta forma.",
			de: "Du kannst bis zu 2 {L}-Energien von diesem Pokémon auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 80 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 3,
	regulationMark: "G",
	illustrator: "Mizue"
}

export default card