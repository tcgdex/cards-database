import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Venomoth",
         ja: "venomoth",
         fr: "Venomoth",
         de: "Venomoth",
         es: "Veneno",
         it: "Venomoth",
         pt: "Venomoth",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [49],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Shift",
            ja: "シフト",
            fr: "Changement",
            de: "Schicht",
            es: "Cambio",
            it: "Spostare",
            pt: "Mudança",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may change the type of Venomoth to the type of any other Pokmon in play other than Colorless. This power can't be used if Venomoth is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前）</em> </em>、毒液のタイプを、無色以外のプレイ中の他のポクモンのタイプに変更することができます。 Venomothが眠っている、混乱し、麻痺している場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez modifier le type de Venomoth par le type de tout autre pokmon en jeu autre que incolore. Ce pouvoir ne peut pas être utilisé si Venomoth est endormi, confus ou paralysé.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie die Art von Venomoth auf die Art eines anderen Pokmon -Spiels als farblos ändern. Diese Kraft kann nicht verwendet werden, wenn die Giftung schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede cambiar el tipo de veneno al tipo de cualquier otro Pokmon en juego que no sea incoloro. Este poder no se puede usar si el veneno está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi cambiare il tipo di Venomoth nel tipo di altri Pokmon in gioco diverso da incolore. Questo potere non può essere usato se Venomoth è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode alterar o tipo de Venomoth para o tipo de qualquer outro Pokmon em jogo que não seja incolor. Esse poder não pode ser usado se Venomoth estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Venom Powder",
            ja: "毒パウダー",
            fr: "Poudre de venin",
            de: "Giftpulver",
            es: "Polvo de veneno",
            it: "Veleno polvere",
            pt: "Venom em pó",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused and Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは混乱し、毒されます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus et empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt verwirrt und vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido y envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso e avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso e envenenado.",
          },
          damage: 10,
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};
