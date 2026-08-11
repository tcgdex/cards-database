import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [984],
	set: Set,

	name: {
		'en-us': "Great Tusk ex",
		'fr-fr': "Fort-Ivoire-ex",
		'es-es': "Colmilargo ex",
		'it-it': "Grandizanne-ex",
		'pt-br': "Presa Grande ex",
		'de-de': "Riesenzahn-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Quaking Demolition",
			'fr-fr': "Démolition Sismique",
			'es-es': "Demolición Sísmica",
			'it-it': "Demolizione Tellurica",
			'pt-br': "Demolição Tremor",
			'de-de': "Bebende Zerstörung"
		},

		effect: {
			'en-us': "Once at the end of your turn (after your attack), if this Pokémon is in the Active Spot, you must discard the top 5 cards of your deck.",
			'fr-fr': "Une fois à la fin de votre tour (après votre attaque), si ce Pokémon est sur le Poste Actif, vous devez défausser les 5 cartes du dessus de votre deck.",
			'es-es': "Una vez al final de tu turno (después de tu ataque), si este Pokémon está en el Puesto Activo, debes descartar las 5 primeras cartas de tu baraja.",
			'it-it': "Una sola volta alla fine del tuo turno, dopo il tuo attacco, se questo Pokémon è in posizione attiva, devi scartare le prime cinque carte del tuo mazzo.",
			'pt-br': "Uma vez no final do seu turno (depois do seu ataque), se este Pokémon estiver no Campo Ativo, você deverá descartar as 5 cartas de cima do seu baralho.",
			'de-de': "Einmal am Ende deines Zuges (nachdem du angegriffen hast), wenn dieses Pokémon in der Aktiven Position ist, musst du die obersten 5 Karten deines Decks auf deinen Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Great Bash",
			'fr-fr': "Grand Coup",
			'es-es': "Golpe y Porrazo",
			'it-it': "Granbotta",
			'pt-br': "Pancada Grande",
			'de-de': "Grandioser Stoß"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 260
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "5ban Graphics",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 751796,
				tcgplayer: 538684
			},
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 866035,
				tcgplayer: 666591
			}
		},
		{
			type: "holo",
			size: "jumbo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 866036,
				tcgplayer: 666593
			}
		}
	],
}

export default card
