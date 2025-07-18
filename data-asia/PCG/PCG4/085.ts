import {Card} from "../../../interfaces"
import Set from "../PCG4"

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

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [233],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "3-D Reset",
            ja: "3Dリセット",
            fr: "Réinitialisation 3D",
            de: "3-D-Reset",
            es: "Reinicio tridimensional",
            it: "Ripristino 3D",
            pt: "Redefinição 3-D",
          },
          effect: {
            en: "As often as you like during your turn (before your attack), return a PokÃ©mon Tool card attached to 1 of your PokÃ©mon to your hand. This power can't be used if Porygon2 is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）好きなように、Pokã©Monに取り付けられたPokã©Mon Tool Cardを手に返します。 Porygon2が特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), retournez une carte à outils Pokã © Mon attachée à 1 de votre poké à votre main. Cette puissance ne peut pas être utilisée si Porygon2 est affecté par une condition spéciale.",
            de: "So oft Sie während Ihres Zuges (vor Ihrem Angriff) möchten, geben Sie eine Poké -Mon -Werkzeugkarte zurück, die an einen Ihrer Poké Mon an Ihre Hand angeschlossen ist. Diese Leistung kann nicht angewendet werden, wenn PoryGon2 von einem besonderen Zustand betroffen ist.",
            es: "Tan a menudo como desee durante su turno (antes de su ataque), devuelva una tarjeta de herramientas Poké Mon unida a 1 de su Poké Mon a su mano. Esta potencia no se puede usar si Porygon2 se ve afectado por una condición especial.",
            it: "Tutte le volte che desideri durante il tuo turno (prima del tuo attacco), restituisci una scheda utensile Poké mon allegata a 1 del tuo poké mondiale alla tua mano. Questa potenza non può essere utilizzata se Porygon2 è influenzato da una condizione speciale.",
            pt: "Sempre que quiser durante o seu turno (antes do seu ataque), devolva um cartão de ferramenta Poké -mon Anexado a 1 do seu Poké © Mon à sua mão. Esse poder não pode ser usado se o Porygon2 for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Data Retrieval",
            ja: "データ取得",
            fr: "Récupération des données",
            de: "Datenabruf",
            es: "Recuperación de datos",
            it: "Recupero dei dati",
            pt: "Recuperação de dados",
          },
          effect: {
            en: "If you have less than 8 cards in your hand, draw cards until you have 8 cards in your hand.",
            ja: "手に8枚未満のカードがある場合は、手に8枚のカードがあるまでカードを描画します。",
            fr: "Si vous avez moins de 8 cartes dans votre main, dessinez des cartes jusqu'à ce que vous ayez 8 cartes dans votre main.",
            de: "Wenn Sie weniger als 8 Karten in der Hand haben, zeichnen Sie Karten, bis Sie 8 Karten in der Hand haben.",
            es: "Si tiene menos de 8 cartas en la mano, dibuje las cartas hasta que tenga 8 cartas en la mano.",
            it: "Se hai meno di 8 carte in mano, disegna le carte fino a quando non hai 8 carte in mano.",
            pt: "Se você tiver menos de 8 cartas na mão, desenhe cartas até ter 8 cartas na mão.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Scramble Trip",
            ja: "スクランブル旅行",
            fr: "Randonnée",
            de: "Ausflug",
            es: "Excursión",
            it: "Viaggio di scramble",
            pt: "Viagem de luta",
          },
          effect: {
            en: "If Porygon2 has a Scramble Energy card attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokemon is now Confused.",
            ja: "Porygon2にスクランブルエネルギーカードが取り付けられている場合、この攻撃は40ダメージに20回のダメージを与え、防御ポケモンが混乱しています。",
            fr: "Si Porygon2 a une carte d'énergie Scramble attachée, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires et le Pokémon en défense est désormais confus.",
            de: "Wenn PoryGon2 über eine Schroffel -Energiekarte befestigt ist, verursacht dieser Angriff 40 Schaden zuzüglich 20 Schadensschaden und das verteidigende Pokémon ist jetzt verwirrt.",
            es: "Si Porygon2 tiene una tarjeta de energía de Scramble unida, este ataque hace 40 daños más 20 más de daño y el Pokémon defensor ahora está confundido.",
            it: "Se Porygon2 ha una carta di energia scramble collegata ad essa, questo attacco fa 40 danni più 20 danni in più e il Pokemon in carica è ora confuso.",
            pt: "Se o Porygon2 tiver um cartão de energia de scramble anexado a ele, esse ataque causará 40 danos mais 20 mais danos e o Pokemon defensor agora está confuso.",
          },
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
