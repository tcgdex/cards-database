import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Copperajah",
		fr: "Pachyradjah",
		es: "Copperajah",
		it: "Copperajah",
		pt: "Copperajah",
		de: "Patinaraja"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Massive Body",
			fr: "Corps Massif",
			es: "Cuerpo Masivo",
			it: "Corpo Massiccio",
			pt: "Parrudo",
			de: "Massiver Körper"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent can't play any Stadium cards from their hand.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de cartes Stade de sa main.",
			es: "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Estadio de su mano.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare le carte Stadio che ha in mano.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhuma carta de Estádio da mão dele.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Stadionkarten aus seiner Hand spielen."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Nasal Lariat",
			fr: "Lasso Nasal",
			es: "Lazo Nasal",
			it: "Nasolazo",
			pt: "Laço Nasal",
			de: "Nasenlasso"
		},

		effect: {
			en: "You may do 100 more damage. If you do, during your next turn, this Pokémon can't attack.",
			fr: "Vous pouvez infliger 100 dégâts supplémentaires. Dans ce cas, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Puedes hacer 100 puntos de daño más. Si lo haces, durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Puoi infliggere 100 danni in più. Se lo fai, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Você pode causar 100 pontos de dano a mais. Se fizer isto, durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Du kannst 100 Schadenspunkte mehr zufügen. Wenn du das machst, kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
		},

		damage: "130+"
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "kawayoo"
}

export default card
