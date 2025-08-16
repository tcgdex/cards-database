import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [984],
	set: Set,

	name: {
		en: "Great Tusk ex",
		fr: "Fort-Ivoire-ex",
		es: "Colmilargo ex",
		it: "Grandizanne-ex",
		pt: "Presa Grande ex",
		de: "Riesenzahn-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Quaking Demolition",
			fr: "Démolition Sismique",
			es: "Demolición Sísmica",
			it: "Demolizione Tellurica",
			pt: "Demolição Tremor",
			de: "Bebende Zerstörung"
		},

		effect: {
			en: "Once at the end of your turn (after your attack), if this Pokémon is in the Active Spot, you must discard the top 5 cards of your deck.",
			fr: "Une fois à la fin de votre tour (après votre attaque), si ce Pokémon est sur le Poste Actif, vous devez défausser les 5 cartes du dessus de votre deck.",
			es: "Una vez al final de tu turno (después de tu ataque), si este Pokémon está en el Puesto Activo, debes descartar las 5 primeras cartas de tu baraja.",
			it: "Una sola volta alla fine del tuo turno, dopo il tuo attacco, se questo Pokémon è in posizione attiva, devi scartare le prime cinque carte del tuo mazzo.",
			pt: "Uma vez no final do seu turno (depois do seu ataque), se este Pokémon estiver no Campo Ativo, você deverá descartar as 5 cartas de cima do seu baralho.",
			de: "Einmal am Ende deines Zuges (nachdem du angegriffen hast), wenn dieses Pokémon in der Aktiven Position ist, musst du die obersten 5 Karten deines Decks auf deinen Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Great Bash",
			fr: "Grand Coup",
			es: "Golpe y Porrazo",
			it: "Granbotta",
			pt: "Pancada Grande",
			de: "Grandioser Stoß"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 260
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "kawayoo",

	thirdParty: {
		cardmarket: 751590
	}
}

export default card