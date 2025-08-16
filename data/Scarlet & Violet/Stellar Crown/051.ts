import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [596],
	set: Set,

	name: {
		en: "Galvantula ex",
		fr: "Mygavolt-ex",
		es: "Galvantula ex",
		it: "Galvantula-ex",
		pt: "Galvantula ex",
		de: "Voltula-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Charged Web",
			fr: "Toile Chargée",
			es: "Tela Cargada",
			it: "Tela Elettrificata",
			pt: "Eletroteia",
			de: "Geladenes Netz"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 110 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 110 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 110 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 110 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 110 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex oder Pokémon-V ist, fügt diese Attacke 110 Schadenspunkte mehr zu."
		},

		damage: "110+"
	}, {
		cost: ["Grass", "Lightning", "Fighting"],

		name: {
			en: "Fulgurite",
			fr: "Fulgurite",
			es: "Fulgurita",
			it: "Folgorite",
			pt: "Fulgurito",
			de: "Fulgurit"
		},

		effect: {
			en: "Discard all Energy from this Pokémon. During your opponent's next turn, they can't play any Item cards from their hand.",
			fr: "Défaussez toutes les Énergies de ce Pokémon. Pendant son prochain tour, votre adversaire ne peut pas jouer de cartes Objet de sa main.",
			es: "Descarta todas las Energías de este Pokémon. Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			it: "Scarta tutte le Energie da questo Pokémon. Durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			pt: "Descarte todas as Energias deste Pokémon. Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
		},

		damage: 180
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics"
}

export default card
