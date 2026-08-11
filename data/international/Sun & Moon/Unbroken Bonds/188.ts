import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Ultra Forest Kartenvoy",
		'fr-fr': "Kata-Sensei de l’Ultra-Forêt",
		'es-es': "Kartanista del Ultrabosque",
		'it-it': "Mastro Karta dell’Ultraforesta",
		'pt-br': "Kartanista da Ultrafloresta",
		'de-de': "Ultrawald Katagami-Ass"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Pendant ce tour, les dégâts des attaques de vos Ultra-Chimères ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		'en-us': "During this turn, damage from your Ultra Beasts’ attacks isn’t affected by any effects on your opponent’s Active Pokémon.",
		'es-es': "Durante este turno, el daño de los ataques de tus Ultraentes no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
		'it-it': "Durante questo turno, i danni degli attacchi delle tue Ultracreature non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
		'pt-br': "Durante esta rodada, o dano dos ataques das suas Ultracriaturas não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
		'de-de': "Während dieses Zuges wird der Schaden der Attacken deiner Ultrabestien durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 372472,
		tcgplayer: 189297
	}
}

export default card
