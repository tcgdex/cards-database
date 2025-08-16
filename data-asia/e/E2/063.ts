import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Porygon2",
         ja: "Porygon2",
         fr: "Porygon2",
         de: "PoryGon2",
         es: "Porygon2",
         it: "Porygon2",
         pt: "Porygon2",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [233],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Backup",
            ja: "バックアップ",
            fr: "Sauvegarde",
            de: "Backup",
            es: "Respaldo",
            it: "Backup",
            pt: "Backup",
          },
          effect: {
            en: "Once during each of your turns <em>(before your attack)</em>, if you have 2 or fewer cards in your hand, you may draw cards from your deck until you have 3 cards in your hand. This power can't be used if Porygon2 is affected by a Special Condition.",
            ja: "それぞれのターンの間に（攻撃の前に）</em> </em>、手に2枚以下のカードがある場合は、手に3枚のカードがあるまでカードからカードを描くことができます。 Porygon2が特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant chacun de vos tours <em> (avant votre attaque) </em>, si vous avez 2 cartes ou moins dans votre main, vous pouvez dessiner des cartes de votre deck jusqu'à ce que vous ayez 3 cartes dans votre main. Cette puissance ne peut pas être utilisée si Porygon2 est affecté par une condition spéciale.",
            de: "Einmal in jedem Ihrer Kurven <em> (vor Ihrem Angriff) </em>, wenn Sie 2 oder weniger Karten in der Hand haben, können Sie Karten aus Ihrem Deck zeichnen, bis Sie 3 Karten in der Hand haben. Diese Leistung kann nicht angewendet werden, wenn PoryGon2 von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante cada una de sus turnos <em> (antes de su ataque) </em>, si tiene 2 o menos cartas en su mano, puede extraer cartas de su mazo hasta que tenga 3 cartas en su mano. Esta potencia no se puede usar si Porygon2 se ve afectado por una condición especial.",
            it: "Una volta durante ciascuna delle tue curve <em> (prima del tuo attacco) </em>, se hai 2 o meno carte in mano, puoi disegnare carte dal tuo mazzo fino a quando non hai 3 carte in mano. Questa potenza non può essere utilizzata se Porygon2 è influenzato da una condizione speciale.",
            pt: "Uma vez durante cada uma das suas turnos <em> (antes do seu ataque) </em>, se você tiver 2 ou menos cartas na mão, poderá desenhar cartas do seu baralho até ter 3 cartas na mão. Esse poder não pode ser usado se o Porygon2 for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Hypnotic Ray",
            ja: "催眠線",
            fr: "Rayon hypnotique",
            de: "Hypnotischer Strahl",
            es: "Rayo hipnótico",
            it: "Raggio ipnotico",
            pt: "Raio hipnótico",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
