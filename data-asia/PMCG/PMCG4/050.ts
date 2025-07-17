import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Porygon",
         ja: "ポリゴン",
         fr: "Purygon",
         de: "Porygon",
         es: "Fisgón",
         it: "Porygon",
         pt: "Porygon",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [137],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Conversion 1",
            ja: "変換1",
            fr: "Conversion 1",
            de: "Konvertierung 1",
            es: "Conversión 1",
            it: "Conversione 1",
            pt: "Conversão 1",
          },
          effect: {
            en: "If the Defending Pokemon has a Weakness, you may change it to a type of your choice other than Colorless. (Benching either Pokemon ends this effect.)",
            ja: "防御するポケモンが弱点を持っている場合、それを無色の以外の選択の種類に変更することができます。 （いずれかのポケモンがこの効果を終了するかのいずれかのベンチを作成します。）",
            fr: "Si le Pokémon en défense a une faiblesse, vous pouvez le changer en un type de votre choix autre que incolore. (Benching soit Pokémon termine cet effet.)",
            de: "Wenn das verteidigende Pokemon eine Schwäche hat, können Sie es in eine andere Art Ihrer Wahl als farblos ändern. (BENCHING BEEDE POKEON ENDEN diesen Effekt.)",
            es: "Si el Pokémon defensor tiene una debilidad, puede cambiarlo a un tipo de su elección que no sea incoloro. (Benching O Pokemon termina este efecto).",
            it: "Se il Pokemon in difesa ha una debolezza, puoi cambiarlo in un tipo di scelta diversa da incolore. (Benching uno dei pokemon termina questo effetto.)",
            pt: "Se o Pokémon atual tiver uma fraqueza, você poderá alterá -lo para um tipo de sua escolha que não seja incolor. (Becada de Pokemon termina esse efeito.)",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Psybeam",
            ja: "PSYBEAM",
            fr: "Psybeam",
            de: "Psybeam",
            es: "Psíquico",
            it: "Psybeam",
            pt: "Psybeam",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: 20,
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
