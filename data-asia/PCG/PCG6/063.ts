import {Card} from "../../../interfaces"
import Set from "../PCG6"

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

      rarity: "Rare",
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
            en: "Once during your turn (before your attack), if you have less than 6 cards in your hand, you may draw cards until you have 6 cards in your hand. This power can't be used if Porygon2 is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）1枚のカードが6枚未満の場合、手に6枚のカードがあるまでカードを描くことができます。 Porygon2が特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si vous avez moins de 6 cartes dans votre main, vous pouvez dessiner des cartes jusqu'à ce que vous ayez 6 cartes dans votre main. Cette puissance ne peut pas être utilisée si Porygon2 est affecté par une condition spéciale.",
            de: "Einmal während Ihres Zuges (vor Ihrem Angriff), wenn Sie weniger als 6 Karten in der Hand haben, können Sie Karten zeichnen, bis Sie 6 Karten in der Hand haben. Diese Leistung kann nicht angewendet werden, wenn PoryGon2 von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), si tiene menos de 6 cartas en su mano, puede dibujar cartas hasta que tenga 6 cartas en la mano. Esta potencia no se puede usar si Porygon2 se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), se hai meno di 6 carte in mano, puoi disegnare le carte fino a quando non hai 6 carte in mano. Questa potenza non può essere utilizzata se Porygon2 è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se você tiver menos de 6 cartas na mão, poderá desenhar cartas até ter 6 cartas na mão. Esse poder não pode ser usado se o Porygon2 for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Machine Burst",
            ja: "マシンバースト",
            fr: "Éclatement de la machine",
            de: "Maschinenburst",
            es: "Estallido de la máquina",
            it: "Scoppio della macchina",
            pt: "Máquina estourada",
          },
          effect: {
            en: "If Porygon2 has a Technical Machine card attached to it, the Defending Pokemon is now Asleep and Burned.",
            ja: "Porygon2にテクニカルマシンカードが付いている場合、防御ポケモンは眠って燃えています。",
            fr: "Si Porygon2 a une carte de machine technique qui y est attachée, le Pokémon en défense est maintenant endormi et brûlé.",
            de: "Wenn PoryGon2 über eine technische Maschinenkarte angebracht ist, schläft das verteidigende Pokémon jetzt und verbrannt.",
            es: "Si Porygon2 tiene una tarjeta de máquina técnica adjunta, el Pokémon defensor ahora está dormido y quemado.",
            it: "Se Porygon2 ha una scheda di macchine tecniche collegata ad essa, il Pokemon in difesa è ormai addormentato e bruciato.",
            pt: "Se o Porygon2 tiver um cartão de máquina técnico conectado a ele, o Pokemon defensor agora está dormindo e queimado.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
