import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Jirachi",
         ja: "ジラチ",
         fr: "Jirachi",
         de: "Jirachi",
         es: "Jirachi",
         it: "Jirachi",
         pt: "Jirachi",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [385],
      hp: 60,
      types: ["Metal"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Wishing Star",
            ja: "星を願っています",
            fr: "Souhaignant Star",
            de: "Wünschen Stern",
            es: "Estrella deseando",
            it: "Wishing Star",
            pt: "Desejando estrela",
          },
          effect: {
            en: "Once during your turn (before your attack), if Jirachi is your Active PokÃ©mon, you may look at the top 5 cards of your deck, choose 1 of them, and put it into your hand. Shuffle your deck afterward. Jirachi and your other Active PokÃ©mon, if any, are now Asleep. This power can't be used if Jirachi is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、ジラチがあなたのアクティブなポカモンである場合、デッキのトップ5カードを見て、それらの1つを選択して、それを手に入れてください。その後、デッキをシャッフルします。ジラチと他のアクティブなポカモンは、もしあれば、今眠っています。ジラチが特別な状態の影響を受けている場合、この力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Jirachi est votre poké actif, vous pouvez regarder les 5 premières cartes de votre deck, choisir 1 d'entre elles et la mettre dans votre main. Mélanger votre deck par la suite. Jirachi et vos autres Poké actifs, le cas échéant, sont maintenant endormis. Ce pouvoir ne peut pas être utilisé si Jirachi est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug (vor Ihrem Angriff), wenn Jirachi Ihr aktiver Poké Mon Mon ist, können Sie sich die Top 5 Karten Ihres Decks ansehen, 1 davon wählen und in Ihre Hand legen. Mischen Sie anschließend Ihr Deck. Jirachi und Ihre anderen aktiven Pokémon schlafen jetzt. Diese Kraft kann nicht verwendet werden, wenn Jirachi von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), si Jirachi es su Poké Mon activo, puede mirar las 5 cartas principales de su mazo, elegir 1 de ellas y ponerlo en su mano. Baraja tu mazo después. Jirachi y su otro Poké activo, si lo hay, ahora están dormidos. Esta potencia no se puede usar si el jirachi se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), se Jirachi è il tuo poké attivo, puoi guardare le prime 5 carte del tuo mazzo, sceglierne 1 e metterlo in mano. Shuffle il tuo mazzo in seguito. Jirachi e il tuo altro poké attivo, se presenti, sono ora addormentati. Questo potere non può essere utilizzato se Jirachi è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se Jirachi for o seu Poké ativo, você pode olhar para as 5 principais cartas do seu baralho, escolher 1 delas e colocá -lo em sua mão. Afaste seu baralho depois. Jirachi e seu outro Poké Mon ativo, se houver, agora estão dormindo. Esse poder não pode ser usado se Jirachi for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Metallic Blow",
            ja: "メタリックブロー",
            fr: "Coup métallique",
            de: "Metallischer Schlag",
            es: "Golpe metálico",
            it: "Colpo metallico",
            pt: "Golpe metálico",
          },
          effect: {
            en: "If the Defending Pokemon has any Poké-Bodies, this attack does 20 damage plus 30 more damage.",
            ja: "防御するポケモンにポケボディがある場合、この攻撃は20ダメージに加えて30ダメージを与えます。",
            fr: "Si le Pokémon en défense a des poké-corps, cette attaque fait 20 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon Poké-Körpern hat, verursacht dieser Angriff 20 Schaden zuzüglich 30 weitere Schäden.",
            es: "Si el Pokémon defensor tiene algún Poké-Bodies, este ataque hace 20 daños más 30 más de daño.",
            it: "Se il Pokemon in carica ha dei bodie Poké, questo attacco infligge 20 danni più 30 danni.",
            pt: "Se o Pokémon atual tiver corpos de Poké, esse ataque causará 20 danos mais 30 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
		  {
			  type: "holo",
		  },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
